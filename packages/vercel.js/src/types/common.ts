/**
 * Enum containing the actions that can be performed against a resource.
 * Group operations are included.
 */
export type ACLAction = 'create' | 'delete' | 'read' | 'update' | 'list';

/**
 * Represents a function with a return type, T.
 */
export type Func<T> = (...args: any[]) => T;

/**
 * Node.js version to use.
 */
export type NodeVersion = '20.x' | '18.x' | '16.x' | '14.x' | '12.x' | '10.x' | '8.10.x';

/**
 * This object contains information related to the pagination of the current request,
 * including the necessary parameters to get the next or previous page of data.
 */
export interface Pagination {
  /**
   * Amount of items in the current page.
   */
  count: number;

  /**
   * Timestamp that must be used to request the next page.
   */
  next: number | null;

  /**
   * Timestamp that must be used to request the previous page.
   */
  prev: number | null;
}

export type DeploymentState =
  | 'BUILDING'
  | 'ERROR'
  | 'INITIALIZING'
  | 'QUEUED'
  | 'READY'
  | 'CANCELED';

export type DeploymentSubstate = 'STAGED' | 'PROMOTED';
export type JobStatus = 'succeeded' | 'failed' | 'skipped' | 'pending' | 'in-progress';
export type ChecksConclusion = 'succeeded' | 'failed' | 'skipped' | 'canceled';
export type ChecksState = 'registered' | 'running' | 'completed';
export type Plan = 'pro' | 'enterprise' | 'hobby' | 'oss';

export type Framework =
  | 'blitzjs'
  | 'nextjs'
  | 'gatsby'
  | 'remix'
  | 'astro'
  | 'hexo'
  | 'eleventy'
  | 'docusaurus-2'
  | 'docusaurus'
  | 'preact'
  | 'solidstart'
  | 'dojo'
  | 'ember'
  | 'vue'
  | 'scully'
  | 'ionic-angular'
  | 'angular'
  | 'polymer'
  | 'svelte'
  | 'sveltekit'
  | 'sveltekit-1'
  | 'ionic-react'
  | 'create-react-app'
  | 'gridsome'
  | 'umijs'
  | 'sapper'
  | 'saber'
  | 'stencil'
  | 'nuxtjs'
  | 'redwoodjs'
  | 'hugo'
  | 'jekyll'
  | 'brunch'
  | 'middleman'
  | 'zola'
  | 'hydrogen'
  | 'vite'
  | 'vitepress'
  | 'vuepress'
  | 'parcel'
  | 'sanity'
  | 'storybook';

export type SoftBlockReason =
  | 'SUBSCRIPTION_CANCELED'
  | 'SUBSCRIPTION_EXPIRED'
  | 'UNPAID_INVOICE'
  | 'ENTERPRISE_TRIAL_ENDED'
  | 'FAIR_USE_LIMITS_EXCEEDED'
  | 'BLOCKED_FOR_PLATFORM_ABUSE';

export type SoftBlockedDueToOverageType =
  | 'blobStores'
  | 'analyticsUsage'
  | 'artifacts'
  | 'bandwidth'
  | 'dataCacheRead'
  | 'dataCacheRevalidation'
  | 'dataCacheWrite'
  | 'edgeConfigRead'
  | 'edgeConfigWrite'
  | 'edgeFunctionExecutionUnits'
  | 'edgeMiddlewareInvocations'
  | 'monitoringMetric'
  | 'postgresComputeTime'
  | 'postgresDatabase'
  | 'postgresDataStorage'
  | 'postgresDataTransfer'
  | 'postgresWrittenData'
  | 'serverlessFunctionExecution'
  | 'sourceImages'
  | 'storageRedisTotalBandwidthInBytes'
  | 'storageRedisTotalCommands'
  | 'storageRedisTotalDailyAvgStorageInBytes'
  | 'storageRedisTotalDatabases'
  | 'webAnalyticsEvent'
  | 'blobTotalSimpleRequests'
  | 'blobTotalAdvancedRequests'
  | 'blobTotalAvgSizeInBytes'
  | 'blobTotalGetResponseObjectSizeInBytes';

export type UserEventEntityType =
  | 'author'
  | 'bitbucket_login'
  | 'bold'
  | 'deployment_host'
  | 'dns_record'
  | 'git_link'
  | 'github_login'
  | 'gitlab_login'
  | 'hook_name'
  | 'integration'
  | 'edge-config'
  | 'link'
  | 'project_name'
  | 'scaling_rules'
  | 'env_var_name'
  | 'target'
  | 'store'
  | 'system';

export interface UserEvent {
  /**
   * The unique identifier of the Event.s
   */
  id: string;

  /**
   * The human-readable text of the Event.
   */
  text: string;

  /**
   * A list of "entities" within the event `text`.
   * Useful for enhancing the displayed text with
   * additional styling and links.
   */
  entities: {
    /**
     * The type of entity.
     */
    type: UserEventEntityType;

    /**
     * The index of where the entity begins within the `text` (inclusive).
     */
    start: number;

    /**
     * The index of where the entity ends within the `text` (non-inclusive).
     */
    end: number;
  }[];

  /**
   * Timestamp (in milliseconds) of when the event was generated.
   */
  createdAt: number;

  /**
   * Metadata for the User who generated the event.
   */
  user?: {
    avatar: string;
    email: string;
    slug?: string;
    uid: string;
    username: string;
  };

  /**
   * The unique identifier of the User who generated the event.
   */
  userId: string;
}

export type EdgeConfigItemValue =
  | (string | number | boolean | { [key: string]: EdgeConfigItemValue } | EdgeConfigItemValue[])
  | null;

export interface EdgeConfigItem {
  key: string;
  value: EdgeConfigItemValue;
  description?: string;
  edgeConfigId: string;
  createdAt: number;
  updatedAt: number;
}

export interface EdgeConfigToken {
  token: string;
  label: string;
  edgeConfigId: string;
  createdAt: number;

  /**
   * This is not the token itself,
   * but rather an id to identify the token by
   */
  id: string;
}

/**
 * A deployment file tree entry
 */
export interface FileTree {
  /**
   * The name of the file tree entry
   */
  name: string;

  /**
   * String indicating the type of file tree entry.
   */
  type: 'directory' | 'file' | 'symlink' | 'lambda' | 'middleware' | 'invalid';

  /**
   * The unique identifier of the file (only valid for the `file` type)
   */
  uid?: string;

  /**
   * The list of children files of the directory (only valid for the `directory` type)
   */
  children?: FileTree[];

  /**
   * The content-type of the file (only valid for the `file` type)
   */
  contentType?: string;

  /**
   * The file "mode" indicating file type and permissions.
   */
  mode: number;

  /**
   * Not currently used. See `file-list-to-tree.ts`.
   */
  symlink?: string;
}
