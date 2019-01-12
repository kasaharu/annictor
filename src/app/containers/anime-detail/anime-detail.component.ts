import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.scss'],
})
export class AnimeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const workId = params.get('workId');
      if (this.invalidWorkId(workId)) {
        this.router.navigate(['/']);
      }
    });
  }

  invalidWorkId(workId: string): boolean {
    return isNaN(+(workId));
  }
}
