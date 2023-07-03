import { Component, Prop, Host, h } from '@stencil/core';

export interface ButtonAppearance {
  container: string;
  label: string;
}

export interface ButtonContent {
  label: string;
}

@Component({
  tag: 'dora-button',
})
export class DoraButton {
  /**
   * 外观
   */
  @Prop() appearance?: ButtonAppearance;
  /**
   * 内容
   */
  @Prop() content?: ButtonContent;

  render() {
    return (
      <Host>
        <button class={this.appearance?.container}>
          <span class={this.appearance?.label}>{this.content?.label}</span>
        </button>
      </Host>
    );
  }
}
