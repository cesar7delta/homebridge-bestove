import { PlatformConfig } from 'homebridge';

export interface BestovePlatformConfig extends PlatformConfig {
    name: string;
    ip: string;
    polling: number;
}