import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css'],
})
export class RepoDetailsComponent implements OnInit {
  user: any;
  name: any;
  details: any;
  ngUnsubscribe= new Subject<any>();
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.user = params.get('user');
      this.name = params.get('name');
      this.profileService
        .getRepositoryDetails(this.user, this.name).pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((data) => {
          this.details = data;
        });
    });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
