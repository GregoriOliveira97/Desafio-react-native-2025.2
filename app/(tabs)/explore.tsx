import { Filter } from "@/components/Filter";
import { ItemCard } from "@/components/ItemCard";
import items from "@/data/items.json";
import { useState } from "react";

import { FlatList, StyleSheet, Text, View } from "react-native";



const CLASSES = ["Todos", "Mago","Paladino","Clérigo", "Guerreiro", "Patrulheiro","Assassino"];

export default function CatalogoScreen() {
  const [filtro, setFiltro] = useState("Todos");

  const heroesFiltrados =
    filtro === "Todos" ? items : items.filter((h) => h.classe === filtro);

  return (
    <View style={styles.container}>
      <Filter options={CLASSES} selected={filtro} onSelect={setFiltro}/>
      <Text style={{fontSize:18, fontWeight:600, paddingHorizontal:4, paddingBottom:12}}>
        Algumas opções de Heróis prontos pra se
        aventurar:
      </Text>
      <FlatList
        data={heroesFiltrados}
        keyExtractor={(item) => item.id}
        numColumns={2} 
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <ItemCard name={item.name} level={item.level} classe={item.classe}/>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: "#f5f5dc" },

  filterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: 12,
    gap: 8,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#6A1B9A",
    backgroundColor: "#fff",
    margin: 4,
  },
  filterButtonActive: {
    backgroundColor: "#6A1B9A",
  },
  filterText: {
    color: "#6A1B9A",
    fontWeight: "500",
  },
  filterTextActive: {
    color: "#fff",
  },

  card: {
    flex: 1,
    margin: 6,
    padding: 12,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    alignItems: "center",
  },
  name: { fontWeight: "bold", color: "#221515" },
  level: { color: "#6A1B9A" },
  classe: { color: "#6A1B9A", fontWeight: "500" },

  createButton: {
    position: "absolute",
    bottom: 16,
    left: 20,
    right: 20,
    backgroundColor: "#6A1B9A",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  createText: { color: "#fff", fontWeight: "bold" },
});
