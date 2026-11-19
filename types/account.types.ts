import type { LucideIcon } from 'lucide-react-native';

export type FilterType = 'all' | 'income' | 'expense';

export type QuickActionType = 'Transfer' | 'Deposit' | 'Statement' | 'More';

export interface Account {
  id: string;
  title: string;
  number: string;
  balance: string;
  icon: LucideIcon;
  color: string;
}

export interface Transaction {
  id: number;
  name: string;
  date: string;
  amount: string;
  color: string;
  type: 'transfer' | 'deposit';
  credit: boolean;
}

export interface QuickAction {
  id: string;
  title: QuickActionType;
  icon: LucideIcon;
  bg: string;
  color: string;
}

export interface TransactionFilter {
  label: string;
  value: FilterType;
}

export interface MoreAccountOption {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}
