export default {
  COMMON: {
    loading: 'Cargando',
    somethingWentWrong: 'Algo salió mal',
  },

  NAVIGATION: {
    back: 'Atrás',
  },

  LOGIN_SCREEN: {
    submit: 'Iniciar sesión',
  },

  SIGN_OUT: {
    logout: 'Cerrar sesión',
  },

  MAIN_SCREEN: {
    title: 'Novedades',
    viewMore: 'Ver más',
    viewLess: 'Ver menos',
    emptyState: 'Aún no tienes novedades',
  },

  EVENTS_SCREEN: {
    title: 'Eventos',
    emptyState: 'No hay eventos para este mes',
    eventStatus: {
      attend: 'Asistirás',
      notAttend: 'No asistirás',
      cancelled: 'Cancelado',
      notConfirmed: 'Confirmar asistencia',
      ended: 'Finalizado',
    },
  },

  PROFILE_SCREEN: {
    title: 'Perfil',
  },

  ONE_ON_ONE: {
    title: 'Resultados 1 on 1',
    emptyState: 'Aún no tienes resultados 1 on 1',
    noComments: 'Sin comentarios',
    comments: 'Comentarios :',
    reviewerActionTitle: '¿A que acciones se compromete Effectus?',
    userActionTitle: '¿A que acciones te comprometes?',
  },

  SIGN_UP: {
    title: 'Registro',
    email: 'Email',
    password: 'Contraseña',
    passwordConfirmation: 'Repetir contraseña',
    button: 'Iniciar sesión',
  },

  EVENT_DETAIL_SCREEN: {
    title: 'Ver evento',
    participantsListTitle: 'Invitados',
    assistanceSelector: {
      maybe: 'Quizás',
      no: 'No',
      yes: 'Sí',
    },
    lastSeenDisclaimer:
      '* El evento fue actualizado. En caso de querer agregar el evento actualizado en tu calendario presiona sí',
    assistanceModal: {
      yes: {
        title: 'Agregar a Google Calendar',
        description:
          'Si el evento fue modificado y ya lo habías agregado, recuerda borrar de tu Google Calendar el evento viejo.',
        cta: 'Agregar',
        notNowButton: 'Por ahora no',
      },
      no: {
        title: 'Borrar de Google Calendar',
        description: 'Si ya habias agregado el evento a tu calendar, recuerda borrarlo.',
        cta: 'Ir a Google Calendar',
        notNowButton: 'Por ahora no',
      },
    },
  },
  ONE_ON_ONE_SCREEN: {
    title: 'Ver Detalle',
  },
};
