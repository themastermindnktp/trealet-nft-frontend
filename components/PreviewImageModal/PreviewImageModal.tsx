import {
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Image,
    ImgProps,
    Flex,
} from "@chakra-ui/react";
import { ThemeTypings } from "@chakra-ui/styled-system";
import React from "react";

type PreviewImageModal = ImgProps & {
    modalSize?: ThemeTypings["components"]["Modal"]["sizes"];
};

export const PreviewImageModal: React.FunctionComponent<PreviewImageModal> = ({
  src,
  width,
  height,
  maxHeight,
  modalSize = "md",
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Image
                onClick={onOpen}
                src={src}
                width={width}
                height={height}
                maxHeight={maxHeight}
                alt=""
            />

            <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex justifyContent="center" alignItems="center">
                            <Image src={src} width="auto" maxHeight="80vh" alt="" />
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
