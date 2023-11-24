import { initDataParser } from './initDataParser.js';
import { serializeInitData } from './serializeInitData.js';
import type { Chat, ChatType, InitDataParsed, User } from './types.js';

/**
 * Class which is responsible for displaying Mini Apps init data.
 */
export class InitData {
  /**
   * Parses incoming value as init data.
   * @param value - value to parse.
   */
  static parse(value: unknown): InitDataParsed {
    return initDataParser().parse(value);
  }

  constructor(private readonly initData: InitDataParsed) {
  }

  /**
   * @see InitDataParsed.authDate
   */
  get authDate(): Date {
    return this.initData.authDate;
  }

  /**
   * @see InitDataParsed.canSendAfter
   */
  get canSendAfter(): number | undefined {
    return this.initData.canSendAfter;
  }

  /**
   * Returns date after which it is allowed to call
   * the [answerWebAppQuery](https://core.telegram.org/bots/api#answerwebappquery) method.
   */
  get canSendAfterDate(): Date | undefined {
    const { canSendAfter } = this;

    return canSendAfter === undefined
      ? undefined
      : new Date(this.authDate.getTime() + canSendAfter * 1000);
  }

  /**
   * @see InitDataParsed.chat
   */
  get chat(): Chat | undefined {
    return this.initData.chat;
  }

  /**
   * @see InitDataParsed.chatType
   */
  get chatType(): ChatType | undefined {
    return this.initData.chatType;
  }

  /**
   * @see InitDataParsed.chatInstance
   */
  get chatInstance(): string | undefined {
    return this.initData.chatInstance;
  }

  /**
   * @see InitDataParsed.hash
   */
  get hash(): string {
    return this.initData.hash;
  }

  /**
   * @see InitDataParsed.queryId
   */
  get queryId(): string | undefined {
    return this.initData.queryId;
  }

  /**
   * @see InitDataParsed.receiver
   */
  get receiver(): User | undefined {
    return this.initData.receiver;
  }

  /**
   * @see InitDataParsed.startParam
   */
  get startParam(): string | undefined {
    return this.initData.startParam;
  }

  /**
   * Serializes this instance to value, sent from the Telegram application.
   */
  serialize(): string {
    return serializeInitData(this.initData);
  }

  /**
   * @see InitDataParsed.user
   */
  get user(): User | undefined {
    return this.initData.user;
  }
}
