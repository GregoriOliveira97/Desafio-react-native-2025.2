import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
};

export function Filter({ options, selected, onSelect }: Props) {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.button,
            selected === option && styles.buttonActive,
          ]}
          onPress={() => onSelect(option)}
        >
          <Text
            style={[
              styles.text,
              selected === option && styles.textActive,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
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
