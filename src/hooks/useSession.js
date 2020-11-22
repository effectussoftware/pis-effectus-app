import { useSelector } from 'react-redux';
/**
 * useSession
 *
 * Useful hook for a selector that is widely used
 *
 * @returns {object}
 */
const useSession = () =>
  useSelector(({ session: { user, info } }) => ({
    user: user || {},
    info,
  }));

export default useSession;
