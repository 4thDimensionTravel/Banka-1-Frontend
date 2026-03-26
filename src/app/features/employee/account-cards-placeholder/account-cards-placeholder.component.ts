import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

interface AccountCardPlaceholder {
  cardNumber: string;
  ownerName: string;
  ownerEmail: string;
  status: 'Aktivna' | 'Blokirana' | 'Deaktivirana';
}

@Component({
  selector: 'app-account-cards-placeholder',
  templateUrl: './account-cards-placeholder.component.html',
  styleUrls: ['./account-cards-placeholder.component.scss']
})
export class AccountCardsPlaceholderComponent implements OnInit {
  accountNumber = '';
  ownerName = '';
  ownershipType = '';
  accountType = '';
  status = '';

  cards: AccountCardPlaceholder[] = [];

  constructor(private readonly route: ActivatedRoute, private readonly location: Location) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.accountNumber = this.route.snapshot.queryParamMap.get('accountNumber') || '';
    this.ownerName = this.route.snapshot.queryParamMap.get('ownerName') || '';
    this.ownershipType = this.route.snapshot.queryParamMap.get('ownershipType') || '';
    this.accountType = this.route.snapshot.queryParamMap.get('accountType') || '';
    this.status = this.route.snapshot.queryParamMap.get('status') || '';
  }

  trackByCard(index: number, card: AccountCardPlaceholder): string {
    return card.cardNumber;
  }
}