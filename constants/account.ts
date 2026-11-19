import {
  CreditCard,
  PiggyBank,
  Wallet,
  ArrowLeftRight,
  PlusCircle,
  FileText,
  MoreHorizontal,
  WalletCards,
  UserRound,
  LockKeyhole,
  HelpCircle,
} from 'lucide-react-native';

import type {
  Account,
  Transaction,
  QuickAction,
  TransactionFilter,
  MoreAccountOption,
} from '../types/account.types';

export const accounts: Account[] = [
  {
    id: '1',
    title: 'Checking Account',
    number: '**** 4521',
    balance: '$4,250.00',
    icon: Wallet,
    color: '#087CF5',
  },
  {
    id: '2',
    title: 'Savings Account',
    number: '**** 8924',
    balance: '$5,750.00',
    icon: PiggyBank,
    color: '#07529B',
  },
  {
    id: '3',
    title: 'Credit Card',
    number: '**** 3210',
    balance: '$2,450.00',
    icon: CreditCard,
    color: '#123D91',
  },
];

export const accountDetails = {
  accountName: 'Checking Account',
  accountNumber: '•••• 4829',
  balance: '$5,230.00',
  availableBalance: 'Available Balance',
  accountType: 'Personal',
  currency: 'USD ($)',
  status: 'Active',
};

export const accountQuickActions: QuickAction[] = [
  {
    id: '1',
    title: 'Transfer',
    icon: ArrowLeftRight,
    bg: '#E8F1FC',
    color: '#07509A',
  },
  {
    id: '2',
    title: 'Deposit',
    icon: PlusCircle,
    bg: '#E6F7EF',
    color: '#16A36A',
  },
  {
    id: '3',
    title: 'Statement',
    icon: FileText,
    bg: '#F0EAFE',
    color: '#8B5CF6',
  },
  {
    id: '4',
    title: 'More',
    icon: MoreHorizontal,
    bg: '#FFF4E5',
    color: '#D97706',
  },
];

export const transactionFilters: TransactionFilter[] = [
  { label: 'All', value: 'all' },
  { label: 'Income', value: 'income' },
  { label: 'Expense', value: 'expense' },
];

export const accountTransactions: Transaction[] = [
  {
    id: 1,
    name: 'Sarah Wilson',
    date: 'Today, 10:30 AM',
    amount: '+$45.00',
    color: '#E8DDFB',
    type: 'deposit',
    credit: true,
  },
  {
    id: 2,
    name: 'Michael Brown',
    date: 'Today, 09:15 AM',
    amount: '-$120.00',
    color: '#DCEBFA',
    type: 'transfer',
    credit: false,
  },
  {
    id: 3,
    name: 'Bank Deposit',
    date: 'Yesterday, 04:20 PM',
    amount: '+$500.00',
    color: '#DDF5E7',
    type: 'deposit',
    credit: true,
  },
  {
    id: 4,
    name: 'John Smith',
    date: 'Yesterday, 11:45 AM',
    amount: '-$80.00',
    color: '#FCE8D5',
    type: 'transfer',
    credit: false,
  },
  {
    id: 5,
    name: 'Bank Deposit',
    date: 'Nov 17, 2026',
    amount: '+$250.00',
    color: '#DDF5E7',
    type: 'deposit',
    credit: true,
  },
  {
    id: 6,
    name: 'David Johnson',
    date: 'Nov 16, 2026',
    amount: '-$65.00',
    color: '#E8DDFB',
    type: 'transfer',
    credit: false,
  },
  {
    id: 7,
    name: 'Bank Deposit',
    date: 'Nov 15, 2026',
    amount: '+$300.00',
    color: '#DDF5E7',
    type: 'deposit',
    credit: true,
  },
  {
    id: 8,
    name: 'Emma Wilson',
    date: 'Nov 14, 2026',
    amount: '-$150.00',
    color: '#FCE8D5',
    type: 'transfer',
    credit: false,
  },
];

export const moreAccountOptions: MoreAccountOption[] = [
  {
    id: 1,
    title: 'Account Details',
    description: 'View your account information',
    icon: WalletCards,
  },
  {
    id: 2,
    title: 'Personal Information',
    description: 'Manage your personal details',
    icon: UserRound,
  },
  {
    id: 3,
    title: 'Security Settings',
    description: 'Manage your account security',
    icon: LockKeyhole,
  },
  {
    id: 4,
    title: 'Help & Support',
    description: 'Get assistance with your account',
    icon: HelpCircle,
  },
];
