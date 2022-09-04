import React, { createContext, useCallback, useContext, useState } from 'react';

import { OpenModal } from '../../types/modal';
import Alert, { AlertProps } from '../modals/Alert';
import Confirm, { ConfirmProps } from '../modals/Confirm';
import GuideModal from '../modals/GuideModal';
import PostUploadModal, {
  PostUploadModalProps,
} from '../modals/PostUploadModal';
import APICallModal, { APICallModalProps } from '../modals/APICallModal';

interface IModalContext {
  openAlert: OpenModal<AlertProps>;
  openConfirm: OpenModal<ConfirmProps>;
  openGuideModal: VoidFunction;
  openPostUploadModal: OpenModal<PostUploadModalProps>;
  openAPICallModal: OpenModal<APICallModalProps>;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);

const useDefaultModalLogic = <T extends unknown>() => {
  const [visible, setVisible] = useState(false);
  const [props, setProps] = useState<T | undefined>();

  const openModal = useCallback((props?: T) => {
    setProps(props);
    setVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setProps(undefined);
    setVisible(false);
  }, []);

  return {
    visible,
    props,
    openModal,
    closeModal,
  };
};

export const useModal = () => useContext(ModalContext);

export const ModalContextProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const {
    openModal: openAlert,
    closeModal: closeAlert,
    props: alertProps,
    visible: alertVisible,
  } = useDefaultModalLogic<AlertProps>();
  const {
    openModal: openConfirm,
    closeModal: closeConfirm,
    props: confirmProps,
    visible: confirmVisible,
  } = useDefaultModalLogic<ConfirmProps>();
  const {
    openModal: openGuideModal,
    closeModal: closeGuideModal,
    visible: guideModalVisible,
  } = useDefaultModalLogic<unknown>();
  const {
    openModal: openPostUploadModal,
    closeModal: closePostUploadModal,
    visible: postUploadModalVisible,
    props: postUploadModalProps,
  } = useDefaultModalLogic<PostUploadModalProps>();
  const {
    openModal: openAPICallModal,
    closeModal: closeAPICallModal,
    visible: openAPICallModalVisible,
    props: openAPICallModalProps,
  } = useDefaultModalLogic<APICallModalProps>();

  const modalContextValue: IModalContext = {
    openAlert,
    openConfirm,
    openGuideModal,
    openPostUploadModal,
    openAPICallModal,
  };

  return (
    <ModalContext.Provider value={modalContextValue}>
      {alertProps && (
        <Alert {...alertProps} onClose={closeAlert} visible={alertVisible} />
      )}
      {confirmProps && (
        <Confirm
          {...confirmProps}
          onClose={closeConfirm}
          visible={confirmVisible}
        />
      )}
      <GuideModal onClose={closeGuideModal} visible={guideModalVisible} />
      {postUploadModalProps && (
        <PostUploadModal
          {...postUploadModalProps}
          onClose={closePostUploadModal}
          visible={postUploadModalVisible}
        />
      )}
      {openAPICallModalProps && (
        <APICallModal
          {...openAPICallModalProps}
          onClose={closeAPICallModal}
          visible={openAPICallModalVisible}
        />
      )}
      {children}
    </ModalContext.Provider>
  );
};
