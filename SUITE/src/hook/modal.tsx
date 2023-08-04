import React from "react";
import { FunctionComponent, useState } from "react";
import { StyleSheet, View, Modal as DefaultModal, Button } from "react-native";
import mainPageStyleSheet from "../style/style";

type ModalProps = {
  activator?: FunctionComponent<{ handleOpen: () => void }>;
  children: React.ReactNode;
};

export function Modal({ activator: Activator, children }: ModalProps) {
  const [isVisible, setVisible] = useState(false);

  return (
    <View>
      <DefaultModal
        visible={isVisible}
        transparent={false}
        animationType={"slide"}
      >
        <View style={mainPageStyleSheet.modalContainer}>
          {children}
          <Button onPress={() => setVisible(false)} title="Close"></Button>
        </View>
      </DefaultModal>
      {Activator ? (
        <Activator handleOpen={() => setVisible(true)} />
      ) : (
        <Button onPress={() => setVisible(true)} title="Open"></Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});