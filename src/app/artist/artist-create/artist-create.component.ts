import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { ArtistService } from '../artist.service';
import { Artist } from '../artist';


@Component({
  selector: 'app-artist-create',
  templateUrl: './artist-create.component.html',
  styleUrls: ['./artist-create.component.css']
})
export class ArtistCreateComponent implements OnInit {
  artistForm!: FormGroup;

  constructor(private artistServive: ArtistService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.artistForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      birthplace: ["", Validators.required],
      birthDate: ["", Validators.required],
      relatedMovements: [""],
    });
  }

  createArtist(artist: Artist){
    console.log(artist);
//    this.exhibitionService.createExhibition(exhibition).subscribe(exhibition=>{
//      console.info("The exhibition was created: ", exhibition)
//      this.toastr.success("Confirmation", "Exhibition created")
//      this.exhibitionForm.reset();
//    })
  }

  cancelCreation(){
    this.artistForm.reset();
    console.info("The creation was canceled")
    this.toastr.info("Confirmation", "Creation canceled")
  }

}
