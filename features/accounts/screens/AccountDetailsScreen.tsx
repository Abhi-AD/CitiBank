import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AccountHeader from '../components/AccountHeader';
import AccountInfoCard from '../components/AccountInfoCard';
import QuickActions from '../components/QuickActions';
import TransactionsSection from '../components/TransactionsSection';
import AccountActionModal from '../components/AccountActionModal';
import type { FilterType, QuickActionType, } from '../../../types/account.types';


export default function AccountDetailsScreen({ onBack, }: { onBack: () => void; }) {
 const [filter, setFilter] = useState<FilterType>('all');
 const [showAll, setShowAll] = useState(false);
 const [activeAction, setActiveAction] = useState<QuickActionType | null>(null);
 const closeModal = () => { setActiveAction(null); };
 const handleActionPress = (action: QuickActionType) => { setActiveAction(action); };

 return (
  <View className="flex-1 bg-[#F5F8FC]">
   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}   >
    <AccountHeader onBack={onBack} />
    <AccountInfoCard onMorePress={() => setActiveAction('More')} />
    <QuickActions onActionPress={handleActionPress} />
    <TransactionsSection filter={filter} setFilter={setFilter} showAll={showAll} setShowAll={setShowAll} />
   </ScrollView>
   <AccountActionModal visible={activeAction !== null} activeAction={activeAction} onClose={closeModal} />
  </View>
 );
}