import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal';
import { Observable } from 'rxjs/Rx';
import { ProposalService } from './proposal.service';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css'],
  providers: [ ProposalService ]
})
export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = + params['id'];
      }
    )
  }
}
