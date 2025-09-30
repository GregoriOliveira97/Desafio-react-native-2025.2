import { ReactNode } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";


type Props = {
  name: string;
  level: number;
  classe: string;
  children?: ReactNode; 
};

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 48) / 2; 

export function ItemCard({ name, level, classe, children }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.level}>Nível {level}</Text>
      <Text style={styles.classe}>{classe}</Text>

      {children && <View style={styles.actions}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    margin: 6,
    padding: 12,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    alignItems: "center",
  },
  name: { fontWeight: "bold", color: "#221515" },
  level: { color: "#6A1B9A" },
  classe: { color: "#6A1B9A", fontWeight: "500" },
  actions: {
    flexDirection: "row",
    marginTop: 8,
    gap: 12,
  },
});
