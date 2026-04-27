import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';

export interface TaxUser {
  id: number;
  firstName: string;
  lastName: string;
  type: 'CLIENT' | 'ACTUARY';
  baseAmount: number; 
  taxDebt: number;  
}

@Component({
  selector: 'app-tax-tracking',
  templateUrl: './tax-tracking.component.html',
  styleUrls: ['./tax-tracking.component.css'],
  standalone: true, 
  imports: [CommonModule, FormsModule, NavbarComponent], 

})
export class TaxTrackingComponent implements OnInit {
  
  users: TaxUser[] = [];
  filteredUsers: TaxUser[] = [];
  
  searchTerm: string = '';
  userTypeFilter: string = 'ALL';
  
  isProcessing: boolean = false;

  constructor(/* private taxService: TaxService */) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    // KADA BACKEND BUDE SPREMAN, OVO CE IZGLEDATI OVAKO:
    /*
    this.taxService.getTaxDebtors().subscribe(data => {
      this.users = data;
      this.filterData();
    });
    */

    // PRIVREMENI LAŽNI PODACI (Obriši kada povežeš sa backendom)

    this.filterData();
  }

  filterData(): void {
    this.filteredUsers = this.users.filter(user => {
      // Filtriranje po imenu/prezimenu
      const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
      const matchesSearch = fullName.includes(this.searchTerm.toLowerCase());
      
      // Filtriranje po tipu
      const matchesType = this.userTypeFilter === 'ALL' || user.type === this.userTypeFilter;
      
      return matchesSearch && matchesType;
    });
  }

  startTaxCalculation(): void {
    if (confirm('Da li ste sigurni da želite ručno da pokrenete naplatu poreza na kapitalnu dobit?')) {
      this.isProcessing = true;
      
      // KADA BACKEND BUDE SPREMAN:
      /*
      this.taxService.triggerTaxCalculation().subscribe({
        next: () => {
          alert('Obračun poreza je uspešno pokrenut i naplaćen.');
          this.loadData(); // Osveži tabelu
          this.isProcessing = false;
        },
        error: (err) => {
          console.error(err);
          this.isProcessing = false;
        }
      });
      */
      
      // Privremena simulacija za UI
      setTimeout(() => {
        this.isProcessing = false;
        alert('Simulacija: Obračun poreza je uspešno pokrenut!');
      }, 1500);
    }
  }
}