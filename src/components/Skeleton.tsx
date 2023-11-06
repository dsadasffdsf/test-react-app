import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={4}
    width={281}
    height={277}
    viewBox="0 0 281 277"
    backgroundColor="#212123"
    foregroundColor="#262629">

    <rect x="0" y="0" rx="0" ry="0" width="281" height="134" />
    <rect x="0" y="175" rx="0" ry="0" width="159" height="24" />
    <rect x="0" y="205" rx="0" ry="0" width="189" height="24" />
    <rect x="0" y="235" rx="0" ry="0" width="76" height="21" />
  </ContentLoader>
);

export default Skeleton;
