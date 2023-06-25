import { Component, Prop, Host, h } from '@stencil/core';

@Component({
  tag: 'dora-button',
})
export class DoraButton {
  defaultSettings = {
    containerClass: 'p-2 bg-red-400 rounded-xl cursor-pointer hover:bg-red-200',
    labelClass: 'text-sm font-bold underline',
  };

  /**
   * 容器class
   */
  @Prop() containerClass?: string = this.defaultSettings.containerClass;
  /**
   * 文本class
   */
  @Prop() labelClass?: string = this.defaultSettings.labelClass;
  /**
   * 文本
   */
  @Prop() label?: string;

  render() {
    return (
      <Host>
        <button class={this.containerClass}>
          <span class={this.labelClass}>{this.label}</span>
        </button>
      </Host>
    );
  }
}
