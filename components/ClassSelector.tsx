import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CLASSES = ["Guerreiro", "Assassino", "Patrulheiro", "Mago", "Clérigo", "Paladino"];

type Props = {
  selected: string;
  onSelect: (classe: string) => void;
};

export function ClassSelector({ selected, onSelect }: Props) {
  return (
    <View style={styles.container}>
      {CLASSES.map((classe) => (
        <TouchableOpacity
          key={classe}
          style={[
            styles.button,
            selected === classe && styles.buttonActive,
          ]}
          onPress={() => onSelect(classe)}
        >
          <Text
            style={[
              styles.text,
              selected === classe && styles.textActive,
            ]}
          >
            {classe}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 12,
    gap: 8,
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#6A1B9A",
    backgroundColor: "#fff",
    margin: 4,
  },
  buttonActive: {
    backgroundColor: "#6A1B9A",
  },
  text: {
    color: "#6A1B9A",
    fontWeight: "500",
  },
  textActive: {
    color: "#fff",
  },
});
