import React, { ReactNode } from 'react';
import {
  View,
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
} from 'react-native';

import Background from '../Background';

import styles from './styles';

interface Props extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

const ModalView: React.FC<Props> = ({ closeModal, children, ...rest }) => {
  return (
    <Modal transparent animationType="slide" {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={styles.overlay}>
          <View style={styles.container}>
            <Background>
              <View style={styles.bar} />
              {children}
            </Background>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalView;
