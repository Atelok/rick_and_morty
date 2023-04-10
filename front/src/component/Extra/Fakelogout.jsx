import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useFakeInactiveUser from './useFakeInactiveUser';
import fake from './fake';

const MAX_INACTIVE_TIME = 300000; // 5 minutos en milisegundos

function useLogoutTimer() {
  const userIsInactive = useFakeInactiveUser(MAX_INACTIVE_TIME);
  const navigate = useNavigate();

  useEffect(() => {
    if (userIsInactive) {
      fake.logout();
      navigate('/session-timed-out');
    }
  }, [userIsInactive, navigate]);
}

export default useLogoutTimer;