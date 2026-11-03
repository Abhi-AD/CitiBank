import {
  Wallet,
  ArrowDownLeft,
  ArrowUpRight,
  Send,
  Home,
  CreditCard,
  History,
  Grid2X2,
  MoreHorizontal,
} from 'lucide-react-native';
export const bottomTabs = [
  { title: 'Home', icon: Home },
  { title: 'Cards', icon: CreditCard },
  { title: 'History', icon: History },
  { title: 'More', icon: Grid2X2 },
];
export const quickActions = [
  { title: 'Transfer', icon: Send },
  { title: 'Pay Bills', icon: CreditCard },
  { title: 'Deposit', icon: Wallet },
  { title: 'More', icon: MoreHorizontal },
];

export const transactions = [
  {
    title: 'Uber',
    date: 'Today, 10:30 AM',
    amount: '-$24.50',
    type: 'expense' as const,
    icon: ArrowUpRight,
    color: '#E9EFF8',
  },
  {
    title: 'Amazon',
    date: 'Yesterday, 04:15 PM',
    amount: '-$120.00',
    type: 'expense' as const,
    icon: ArrowUpRight,
    color: '#FCEBDD',
  },
  {
    title: 'Salary Deposit',
    date: 'Yesterday, 09:00 AM',
    amount: '+$3,500.00',
    type: 'income' as const,
    icon: ArrowDownLeft,
    color: '#DFF6EA',
  },
];

export const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return 'Good Morning,';
  }

  if (hour >= 12 && hour < 17) {
    return 'Good Afternoon,';
  }

  if (hour >= 17 && hour < 21) {
    return 'Good Evening,';
  }

  return 'Good Night,';
};
