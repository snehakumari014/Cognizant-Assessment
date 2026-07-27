import { ElementRef } from '@angular/core';
import { Highlight } from './highlight';

describe('Highlight', () => {
  it('should create an instance', () => {

    const mockElementRef = {
      nativeElement: document.createElement('div')
    } as ElementRef;

    const directive = new Highlight(mockElementRef);

    expect(directive).toBeTruthy();
  });
});