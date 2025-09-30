import { ClassSelector } from "@/components/ClassSelector";
import { CustomModal } from "@/components/CustomModal";
import { ItemCard } from "@/components/ItemCard";
import itemsData from "@/data/items.json";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const CLASSES = ["Guerreiro", "Assassino", "Patrulheiro", "Mago", "Clérigo", "Paladino"];

export default function GerenciamentoScreen() {
  const [items, setItems] = useState(itemsData);
  const [modalVisible, setModalVisible] = useState(false);

  const [newItemName, setNewItemName] = useState("");
  const [newItemClasse, setNewItemClasse] = useState(CLASSES[0]);
  const [newItemLevel, setNewItemLevel] = useState("");
  const [editId, setEditId] = useState<string | null>(null);

  const resetForm = () => {
    setEditId(null);
    setNewItemName("");
    setNewItemClasse(CLASSES[0]);
    setNewItemLevel("");
  };

  // garante que ao fechar o modal o formulário é limpo (inclui hardware back no Android via onRequestClose)
  useEffect(() => {
    if (!modalVisible) resetForm();
  }, [modalVisible]);

  const openCreateModal = () => {
    resetForm(); // limpa qualquer coisa que ficou
    setModalVisible(true);
  };

  const handleSave = () => {
    if (!newItemName || !newItemClasse || !newItemLevel) {
      Alert.alert("Preencha todos os campos!");
      return;
    }

    if (editId) {
      // editar
      setItems((prev) =>
        prev.map((item) =>
          item.id === editId
            ? { ...item, name: newItemName, classe: newItemClasse, level: Number(newItemLevel) }
            : item
        )
      );
      setEditId(null);
    } else {
      // criar
      const newItem = {
        id: String(Date.now()),
        name: newItemName,
        classe: newItemClasse,
        level: Number(newItemLevel),
      };
      setItems((prev) => [...prev, newItem]);
    }

    setModalVisible(false); // useEffect vai chamar resetForm
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (id: string) => {
    const item = items.find((i) => i.id === id);
    if (!item) return;
    setEditId(item.id);
    setNewItemName(item.name);
    setNewItemClasse(item.classe);
    setNewItemLevel(String(item.level));
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.createButton} onPress={openCreateModal}>
        <Text style={styles.createText}>+ Criar Item</Text>
      </TouchableOpacity>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <ItemCard name={item.name} level={item.level} classe={item.classe}>
            <TouchableOpacity onPress={() => handleEdit(item.id)}>
              <Text style={styles.edit}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.delete}>Excluir</Text>
            </TouchableOpacity>
          </ItemCard>
        )}
      />

  <CustomModal
      visible={modalVisible}
      title={editId ? "Editar Item" : "Criar Item"}
      onClose={() => setModalVisible(false)}
    >
      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={newItemName}
        onChangeText={setNewItemName}
      />
      <TextInput
        placeholder="Nível"
        style={styles.input}
        keyboardType="numeric"
        value={newItemLevel}
        onChangeText={setNewItemLevel}
      />

      <ClassSelector selected={newItemClasse} onSelect={setNewItemClasse} />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveText}>Salvar</Text>
      </TouchableOpacity>
</CustomModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop:12,padding: 12, backgroundColor: "#f5f5dc" },

  edit: { color: "blue" },
  delete: { color: "red" },

  createButton: {
    backgroundColor: "#6A1B9A",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 12,
  },
  createText: { color: "#fff", fontWeight: "bold" },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "80%",
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 12 },
  input: {
    borderWidth: 1,
    borderColor: "#6A1B9A",
    padding: 8,
    borderRadius: 8,
    marginBottom: 10,
  },

  saveButton: {
    backgroundColor: "#6A1B9A",
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: "center",
  },
  saveText: { color: "#fff", fontWeight: "bold" },
  cancel: { color: "red", textAlign: "center" },
});
