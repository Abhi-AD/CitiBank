import { useState } from 'react';

import {
  View,
  Text,
  Modal,
  ScrollView,
  Pressable,
  TextInput,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';

import {
  X,
  ArrowLeftRight,
  PlusCircle,
  FileText,
  Download,
  ChevronRight,
} from 'lucide-react-native';

import {
  accountDetails,
  accountTransactions,
  moreAccountOptions,
} from '../../../constants/account';

import type { QuickActionType } from '../../../types/account.types';

interface Props {
  visible: boolean;
  activeAction: QuickActionType | null;
  onClose: () => void;
}

export default function AccountActionModal({
  visible,
  activeAction,
  onClose,
}: Props) {
  const [recipient, setRecipient] = useState('');
  const [transferAmount, setTransferAmount] = useState('');
  const [depositAmount, setDepositAmount] = useState('');

  const closeModal = () => {
    setRecipient('');
    setTransferAmount('');
    setDepositAmount('');
    onClose();
  };

  const handleTransfer = () => {
    if (!recipient.trim() || !transferAmount.trim()) {
      Alert.alert(
        'Missing Information',
        'Please enter recipient and amount.',
      );
      return;
    }

    if (!Number.isFinite(Number(transferAmount)) || Number(transferAmount) <= 0) {
      Alert.alert('Invalid Amount', 'Enter a valid amount.');
      return;
    }

    Alert.alert(
      'Demo Transfer',
      `Transfer of $${transferAmount} to ${recipient} submitted in demo mode.`,
      [{ text: 'OK', onPress: closeModal }],
    );
  };

  const handleDeposit = () => {
    if (!depositAmount.trim()) {
      Alert.alert('Missing Amount', 'Please enter deposit amount.');
      return;
    }

    if (!Number.isFinite(Number(depositAmount)) || Number(depositAmount) <= 0) {
      Alert.alert('Invalid Amount', 'Enter a valid amount.');
      return;
    }

    Alert.alert(
      'Demo Deposit',
      `Deposit of $${depositAmount} submitted in demo mode.`,
      [{ text: 'OK', onPress: closeModal }],
    );
  };

  const getModalTitle = () => {
    switch (activeAction) {
      case 'Transfer':
        return 'Transfer Money';
      case 'Deposit':
        return 'Deposit Money';
      case 'Statement':
        return 'Account Statement';
      case 'More':
        return 'More Options';
      default:
        return '';
    }
  };

  const renderInput = (
    label: string,
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
    keyboardType: 'default' | 'numeric' = 'default',
  ) => (
    <View className="mb-4">
      <Text className="mb-2 text-[12px] font-semibold text-[#475569]">
        {label}
      </Text>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#94A3B8"
        keyboardType={keyboardType}
        className="h-12 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] px-4 text-[13px] text-[#183153]"
      />
    </View>
  );

  const handleMoreOption = (title: string) => {
    closeModal();
    Alert.alert(title, `${title} selected.`);
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={closeModal}
    >
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={0}
      >
        <View className="flex-1 justify-end bg-black/40">
          <Pressable className="flex-1" onPress={closeModal} />

          <View className="rounded-t-[28px] bg-white px-5 pt-5"
            style={{
              maxHeight: '85%',
              paddingBottom: 24,
            }}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              keyboardDismissMode="on-drag"
              contentContainerStyle={{ paddingBottom: 12 }}
            >
              {/* Modal Header */}
              <View className="mb-6 flex-row items-center justify-between">
                <View>
                  <Text className="text-[18px] font-bold text-[#183153]">
                    {getModalTitle()}
                  </Text>

                  <Text className="mt-1 text-[11px] text-[#94A3B8]">
                    Manage your checking account
                  </Text>
                </View>

                <Pressable
                  onPress={closeModal}
                  className="h-9 w-9 items-center justify-center rounded-full bg-[#F1F5F9]"
                >
                  <X size={19} color="#475569" />
                </Pressable>
              </View>

              {/* TRANSFER */}
              {activeAction === 'Transfer' && (
                <View>
                  <View className="mb-5 items-center rounded-2xl bg-[#E8F1FC] p-5">
                    <View className="mb-3 h-14 w-14 items-center justify-center rounded-full bg-white">
                      <ArrowLeftRight size={26} color="#07509A" />
                    </View>

                    <Text className="text-[13px] font-semibold text-[#183153]">
                      Available Balance
                    </Text>

                    <Text className="mt-1 text-[24px] font-bold text-[#07509A]">
                      {accountDetails.balance}
                    </Text>
                  </View>

                  {renderInput(
                    'Recipient Name',
                    'Enter recipient name',
                    recipient,
                    setRecipient,
                  )}

                  {renderInput(
                    'Transfer Amount',
                    'Enter amount',
                    transferAmount,
                    setTransferAmount,
                    'numeric',
                  )}

                  <Pressable
                    onPress={handleTransfer}
                    className="mt-2 h-12 items-center justify-center rounded-xl bg-[#07509A] active:opacity-80"
                  >
                    <Text className="text-[13px] font-bold text-white">
                      Continue Transfer
                    </Text>
                  </Pressable>
                </View>
              )}

              {/* DEPOSIT */}
              {activeAction === 'Deposit' && (
                <View>
                  <View className="mb-5 items-center rounded-2xl bg-[#E6F7EF] p-5">
                    <View className="mb-3 h-14 w-14 items-center justify-center rounded-full bg-white">
                      <PlusCircle size={26} color="#16A36A" />
                    </View>

                    <Text className="text-[13px] font-semibold text-[#183153]">
                      Deposit to
                    </Text>

                    <Text className="mt-1 text-[15px] font-bold text-[#16A36A]">
                      {accountDetails.accountName}
                    </Text>
                  </View>

                  {renderInput(
                    'Deposit Amount',
                    'Enter deposit amount',
                    depositAmount,
                    setDepositAmount,
                    'numeric',
                  )}

                  <Pressable
                    onPress={handleDeposit}
                    className="mt-2 h-12 items-center justify-center rounded-xl bg-[#16A36A] active:opacity-80"
                  >
                    <Text className="text-[13px] font-bold text-white">
                      Continue Deposit
                    </Text>
                  </Pressable>
                </View>
              )}

              {/* STATEMENT */}
              {activeAction === 'Statement' && (
                <View>
                  <View className="mb-5 rounded-2xl bg-[#F0EAFE] p-4">
                    <View className="flex-row items-center gap-3">
                      <View className="h-12 w-12 items-center justify-center rounded-xl bg-white">
                        <FileText size={23} color="#8B5CF6" />
                      </View>

                      <View className="flex-1">
                        <Text className="text-[14px] font-bold text-[#183153]">
                          Account Statement
                        </Text>

                        <Text className="mt-1 text-[11px] text-[#8292A8]">
                          Checking Account {accountDetails.accountNumber}
                        </Text>
                      </View>
                    </View>
                  </View>

                  <Text className="mb-3 text-[13px] font-bold text-[#183153]">
                    Recent Activity
                  </Text>

                  {accountTransactions.map((transaction) => (
                    <View
                      key={transaction.id}
                      className="flex-row items-center border-b border-[#F1F4F8] py-3"
                    >
                      <View className="flex-1">
                        <Text className="text-[12px] font-semibold text-[#183153]">
                          {transaction.name}
                        </Text>

                        <Text className="mt-1 text-[10px] text-[#94A3B8]">
                          {transaction.date}
                        </Text>
                      </View>

                      <Text
                        className={`text-[12px] font-bold ${transaction.credit
                          ? 'text-[#16A36A]'
                          : 'text-[#183153]'
                          }`}
                      >
                        {transaction.amount}
                      </Text>
                    </View>
                  ))}

                  <Pressable
                    onPress={() =>
                      Alert.alert(
                        'Demo Statement',
                        'Connect your backend to generate and download the actual account statement.',
                      )
                    }
                    className="mt-5 h-12 flex-row items-center justify-center gap-2 rounded-xl bg-[#07509A]"
                  >
                    <Download size={17} color="#FFFFFF" />

                    <Text className="text-[13px] font-bold text-white">
                      Download Statement
                    </Text>
                  </Pressable>
                </View>
              )}

              {/* MORE */}
              {activeAction === 'More' && (
                <View>
                  {moreAccountOptions.map((option) => {
                    const Icon = option.icon;

                    return (
                      <Pressable
                        key={option.id}
                        onPress={() => handleMoreOption(option.title)}
                        className="mb-3 flex-row items-center rounded-xl border border-[#EDF1F6] bg-white p-4 active:bg-[#F8FAFC]"
                      >
                        <View className="h-11 w-11 items-center justify-center rounded-xl bg-[#E8F1FC]">
                          <Icon size={21} color="#07509A" />
                        </View>

                        <View className="ml-3 flex-1">
                          <Text className="text-[13px] font-semibold text-[#183153]">
                            {option.title}
                          </Text>

                          <Text className="mt-1 text-[11px] text-[#94A3B8]">
                            {option.description}
                          </Text>
                        </View>

                        <ChevronRight size={18} color="#94A3B8" />
                      </Pressable>
                    );
                  })}
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}