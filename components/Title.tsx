import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  subtitle?: string;
  fontSize?: number;
};

export function Title({ title, subtitle, fontSize = 18 }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontSize }]}>
        {title}
      </Text>
      {subtitle && (
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingTop:8,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",   // 👈 centraliza texto
    color: "#6A1B9A",
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",   // 👈 centraliza subtítulo também
    fontSize: 16,
    color: "#000000",
    opacity: 0.7,
  },
});
