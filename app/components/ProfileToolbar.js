import React, { PropTypes } from 'react';
import ProfileDataKeyList from './ProfileDataKeyList';

const ProfileToolbar = ({ dataKeys, onDataKeyClick }) => (
  <div
    style={{
      margin: '16px 64px',
    }}
  >
    <ProfileDataKeyList
      dataKeys={dataKeys}
      onDataKeyClick={onDataKeyClick}
    />
  </div>
);

ProfileToolbar.propTypes = {
  perfItems: PropTypes.array.isRequired,
  dataKeys: PropTypes.array.isRequired,
  onDataKeyClick: PropTypes.func.isRequired,
};

export default ProfileToolbar;
