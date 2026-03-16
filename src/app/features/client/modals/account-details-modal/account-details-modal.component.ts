import { Component, EventEmitter, Output } from '@angular/core';

interface AccountDetails {
  accountName: string;
  accountNumber: string;
  ownerName: string;
  accountType: string;
  availableBalance: number;
  reservedFunds: number;
  currentBalance: number;
  currency: string;
}

@Component({
  selector: 'app-account-details-modal',
  templateUrl: './account-details-modal.component.html',
  styleUrls: ['./account-details-modal.component.scss']
})
export class AccountDetailsModalComponent {
  @Output() close = new EventEmitter<void>();

  public account: AccountDetails = {
    accountName: 'Main personal account',
    accountNumber: '265-1234567890123-45',
    ownerName: 'Nikola Ilibasic',
    accountType: 'Personal current account',
    availableBalance: 125430.55,
    reservedFunds: 0,
    currentBalance: 125430.55,
    currency: 'RSD'
  };

  public closeModal(): void {
    this.close.emit();
  }

  public onChangeAccountName(): void {
    console.log('Open change account name modal');
  }

  public onNewPayment(): void {
    console.log('Open new payment flow');
  }

  public onChangeLimit(): void {
    console.log('Open change limit flow');
  }
}
