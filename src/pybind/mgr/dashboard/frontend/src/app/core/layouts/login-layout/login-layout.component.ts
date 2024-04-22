import { Component } from '@angular/core';
import { Icons } from '~/app/shared/enum/icons.enum';

@Component({
  selector: 'cd-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.scss']
})
export class LoginLayoutComponent {
  docItems: any[] = [
    { section: 'help', text: $localize`Help` },
    { section: 'terms', text: $localize`Terms of Use` },
    { section: 'privacy', text: $localize`Privacy Policy` }
  ];
  icons = Icons;
}
