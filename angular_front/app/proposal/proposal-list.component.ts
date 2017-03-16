import { Component } from '@angular/core';
import { Proposal } from './proposal';


@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html',
  styleUrls: ['proposal-list.component.css'],
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal( 15, 'Decode Copy','http://linneasportfolio.com',
  'Pavlos Budget App', 150, 120, 4, 'linnea@decodecopy.com' )

  proposalTwo: Proposal = new Proposal( 13, 'Too daa company','http://linneasportfolio.com',
  'Pavlos duck App', 150, 120, 11, 'linnea@decodecopy.com' )

  proposalThree: Proposal = new Proposal( 43, 'ABC dsde','http://linneasportfolio.com',
  'Pavlos dedaa App', 150, 120, 12, 'linnea@decodecopy.com' )

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
