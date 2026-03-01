import { Component, effect, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Block {
  key: string;
  value: string;
}

@Component({
  selector: 'lib-block-builder',
  imports: [FormsModule],
  templateUrl: './block-builder-lib.html',
})
export class BlockBuilderLib {
  private readonly dataObject: Record<string, any> = {
    name: 'Ігор',
    age: 30,
    city: 'Київ',
  };
  readonly keys: string[] = Object.keys(this.dataObject);

  blocks: WritableSignal<Block[]> = signal([{ key: 'name', value: this.dataObject['name'] }]);
  blocksChange?: (blocks: Block[]) => void;

  constructor() {
    effect(() => {
      this.blocksChange?.(this.blocks());
    });
  }

  addBlock(): void {
    const firstKey = this.keys[0];
    this.blocks.update(blocks => [...blocks, { key: firstKey, value: this.dataObject[firstKey] }]);
  }

  removeBlock(index: number): void {
    this.blocks.update(blocks => blocks.filter((_, i) => i !== index));
  }

  updateBlockKey(index: number, newKey: string): void {
    this.blocks.update(blocks => {
      const updated = [...blocks];
      updated[index] = { key: newKey, value: this.dataObject[newKey] };
      return updated;
    });
  }

  moveBlockUp(index: number): void {
    if (index <= 0) return;
    this.blocks.update(blocks => {
      const updated = [...blocks];
      [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
      return updated;
    });
  }

  moveBlockDown(index: number): void {
    const blocksLength = this.blocks().length;
    if (index >= blocksLength - 1) return;
    this.blocks.update(blocks => {
      const updated = [...blocks];
      [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
      return updated;
    });
  }
}
