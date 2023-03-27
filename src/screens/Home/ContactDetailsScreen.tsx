import ContactDetailsComponent from 'components/ContactDetails/ContactDetailsComponent';
import React from 'react';
import {ContactDetailScreenProps} from 'screens/types';

const ContactScreen: React.FC<ContactDetailScreenProps> = props => {
  return <ContactDetailsComponent {...props} />;
};

export default ContactScreen;
