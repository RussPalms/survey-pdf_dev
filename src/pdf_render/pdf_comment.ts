import { IRect, DocController } from '../docController';
import { IQuestion } from 'survey-core';
import { PdfBrick } from './pdf_brick';

export class CommentBrick extends PdfBrick {
    constructor(protected question: IQuestion, protected controller: DocController, 
        rect: IRect, protected textFieldRect: IRect, protected textRect: IRect = null) {
        super(question, controller, rect);
    }
    render(): void {

    }
}