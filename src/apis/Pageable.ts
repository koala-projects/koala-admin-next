import Sort from './Sort';
/**
 *
 * @export
 * @interface Pageable
 */
export default interface Pageable {
  /**
   *
   * @type {number}
   * @memberof Pageable
   */
  offset?: number;
  /**
   *
   * @type {Sort}
   * @memberof Pageable
   */
  sort?: Sort;
  /**
   *
   * @type {number}
   * @memberof Pageable
   */
  pageSize?: number;
  /**
   *
   * @type {number}
   * @memberof Pageable
   */
  pageNumber?: number;
  /**
   *
   * @type {boolean}
   * @memberof Pageable
   */
  paged?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof Pageable
   */
  unpaged?: boolean;
}
