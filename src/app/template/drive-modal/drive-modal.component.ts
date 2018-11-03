import { Component, OnInit, Renderer2, ElementRef, Inject, ViewChild } from '@angular/core';
import { ModalService } from '../../shared/modal/modal.service';
import { ModalBase } from '../../shared/modal/modal.base';
import { DOCUMENT } from '@angular/platform-browser';
import { ModalComponent } from '../../shared/modal/modal.component';

@Component({
    selector: 'app-drive-modal',
    templateUrl: './drive-modal.component.html',
    styleUrls: ['./drive-modal.component.sass']
})
export class DriveModalComponent implements OnInit {

    @ViewChild('meuModal') meuModal: any;
    myModal: ModalService;

    constructor(
        private modalService: ModalService
    ) {}

    ngOnInit() {
        this.openModalSaveContinuaae();
    }

    openModalTemplate() {
        this.meuModal.open();
    }

    openModalSaveContinuaae() {

    }

    open() {
        const myModal = this.modalService.initModal({
            role: 'save',
            id: 'modalSaveContinue',
            title: 'Alerta',
            btClose: false,
            content: 'Descrição de marcação ra ra ra...',
            actions: {
                customClass: 'mt-40',
                confirmLabelKey: 'Confirma'
            }
        }).subscribe((resp: any) => {
            if (resp === 'cancel') {
                console.log('resp cancel');
                console.log(resp);
            }

            if (resp === 'confirm') {
                console.log('resp confirm');
                console.log(resp);
            }
        });

        // myModal.onCancel.subscribe((resp: any) => {
        //     console.log('cancel');
        //     console.log(resp);
        // });

        // myModal.onConfirm.subscribe((resp: any) => {
        //     console.log('confirm');
        //     console.log(resp);
        // });
    }
}
