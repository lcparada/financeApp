export interface TransactionModel {
  id: string;
  type: "Lucro" | "Despesa";
  date: string;
  value: string;
  name: string;
  category: string;
}
