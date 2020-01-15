import { BrokerHistory } from '../models';

/**
 * Interface for the 'Brokers' data
 */
export interface BrokersEntity {
  id: string;
  hbxId: string;
  staffName: string;
  currentStatus: string;
  writingAgency: string;
  history: BrokerHistory[];
}
