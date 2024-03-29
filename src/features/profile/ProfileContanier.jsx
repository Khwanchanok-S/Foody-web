import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ProfilePanel from './ProfilePanel';
import * as userApi from '../../apis/user-api';

export default function ProfileContanier() {
  const [profileUser, setProfileUser] = useState({});
  const { userId } = useParams();

  useEffect(() => {
    const fetchProfileUser = async () => {
      try {
        const res = await userApi.getProfileUser(userId);
        console.log(res);
        setProfileUser(res.data.user);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProfileUser();
  }, [userId]);
  return (
    <div className="px-80">
      <div
        className="shadow-xl  py-10 flex justify-center"
        style={{ backgroundImage: 'linear-gradient(#fof2f5, #fff)' }}
      >
        <ProfilePanel profileUser={profileUser} />
      </div>
    </div>
  );
}
