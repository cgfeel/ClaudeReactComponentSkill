/**
 * BookmarkCard 组件属性接口
 */
export interface BookmarkCardProps {
  /** 书签标题 */
  title: string;
  /** 书签链接URL */
  url: string;
  /** 书签描述（可选） */
  description?: string;
  /** 书签标签列表（可选） */
  tags?: string[];
  /** 自定义外层类名（可选） */
  className?: string;
}
