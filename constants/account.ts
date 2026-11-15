import { CreditCard, PiggyBank, Wallet } from 'lucide-react-native';

export const accounts = [
  {
    id: '1',
    title: 'Checking Account',
    number: '**** 4521',
    balance: '$ 4,250.00',
    icon: Wallet,
    color: '#087CF5',
  },
  {
    id: '2',
    title: 'Savings Account',
    number: '**** 8924',
    balance: '$ 5,750.00',
    icon: PiggyBank,
    color: '#07529B',
  },
  {
    id: '3',
    title: 'Credit Card',
    number: '**** 3210',
    balance: '$ 2,450.00',
    icon: CreditCard,
    color: '#123D91',
  },
];
