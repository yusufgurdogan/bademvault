import { Component, OnInit } from '@angular/core';
import {WalletService} from "../services/wallet.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  donationAccount = `bdm_14mmatdj4rhqukt9ityymbaqdkiz5smww7uinkt4hw1rzknqepi496hr4zdf`;

  wallet = this.walletService.wallet;

  constructor(private walletService: WalletService) { }

  ngOnInit() {
  }

}
