/* eslint-disable import/order */
import React, { useEffect, useState } from 'react';
import { object } from 'prop-types';
import { View, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { google } from 'calendar-link';
import moment from 'moment';
import { isEmpty } from 'lodash';

import { updateEventAssistance } from 'actions/eventActions';
import { useBottomSheetRef, useSetNavigationOptions } from 'hooks';
import { useGetEvent } from './EventDetailScreen.hooks';
import strings from 'locale';
import { openExternalLink } from 'utils/helpers';

import { BottomSheet, Loader, ModalCard, Text } from 'components';
import AssistanceSelector, { MAYBE, NO, YES } from './AssistanceSelector';
import InviteeItem from './InviteeItem';
import EventInformation from './EventInformation';

import styles from './EventDetailScreen.styles';
import { GOOGLE_CALENDAR_URL } from 'constants';

const EventDetailScreen = ({
  route: {
    params: { id },
  },
}) => {
  // SET NAVIGATION OPTIONS
  useSetNavigationOptions({ title: null });

  // DATA FETCH & READ
  const dispatch = useDispatch();

  const { event, loading } = useGetEvent(id);

  const [selectedAssistance, setSelectedAssistance] = useState();

  // DATA PARSE
  const { name, description, address, startTime, endTime, changedLastSeen, cancelled } = event;

  const finished = moment(event.endTime).isBefore(moment());
  const hasStarted = moment(startTime).isBefore(moment());

  useEffect(() => {
    if (!event) return;
    const { confirmation, attend } = event;

    let newSelectedAssistance = MAYBE;
    if (confirmation) newSelectedAssistance = attend ? YES : NO;

    setSelectedAssistance(newSelectedAssistance);
  }, [dispatch, event]);

  const eventLink = google({
    title: name,
    description,
    location: address,
    start: moment(startTime).toISOString(),
    end: moment(endTime).toISOString(),
  });

  // HANDLE EVENTS
  const [bottomSheetRef, handleOnBottomSheetOpen, handleOnBottomSheetClose] = useBottomSheetRef();

  const handleSelectAssistance = newSelectedAssistance => {
    if (
      newSelectedAssistance === YES ||
      (newSelectedAssistance !== selectedAssistance && newSelectedAssistance !== MAYBE)
    ) {
      if (
        newSelectedAssistance === YES ||
        (selectedAssistance === YES && newSelectedAssistance === NO)
      )
        handleOnBottomSheetOpen();
    }
    dispatch(
      updateEventAssistance(id, {
        confirmation: newSelectedAssistance !== MAYBE,
        attend: newSelectedAssistance === YES,
      }),
    );
    setSelectedAssistance(newSelectedAssistance);
  };

  const handleBottomSheetCTAPress = () => {
    openExternalLink(selectedAssistance === YES ? eventLink : GOOGLE_CALENDAR_URL);
    handleOnBottomSheetClose();
  };

  // RENDER
  if (isEmpty(event) && loading) return <Loader />;

  return (
    <View style={styles.container}>
      <ScrollView>
        <EventInformation event={event} />

        <View style={styles.contentContainer}>
          <Text type="H3">{strings.EVENT_DETAIL_SCREEN.participantsListTitle}</Text>
          {event.users?.map((invitee, index) => (
            <InviteeItem key={index} isOdd={index % 2 === 0} invitee={invitee} />
          ))}
        </View>
      </ScrollView>
      {!!selectedAssistance && (
        <AssistanceSelector
          changedLastSeen={changedLastSeen}
          currentSelection={selectedAssistance}
          onPress={handleSelectAssistance}
          cancelled={cancelled}
          disabled={hasStarted || cancelled || finished}
          finished={finished}
        />
      )}
      <BottomSheet reference={bottomSheetRef}>
        <ModalCard
          handleOnClose={handleOnBottomSheetClose}
          title={strings.EVENT_DETAIL_SCREEN.assistanceModal[selectedAssistance]?.title}
          description={strings.EVENT_DETAIL_SCREEN.assistanceModal[selectedAssistance]?.description}
          primaryText={strings.EVENT_DETAIL_SCREEN.assistanceModal[selectedAssistance]?.cta}
          secondaryText={
            strings.EVENT_DETAIL_SCREEN.assistanceModal[selectedAssistance]?.notNowButton
          }
          onCTAPress={handleBottomSheetCTAPress}
        />
      </BottomSheet>
    </View>
  );
};

EventDetailScreen.propTypes = {
  route: object.isRequired,
};

export default EventDetailScreen;
