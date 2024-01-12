import type { SoftBlockReason, SoftBlockedDueToOverageType, UserEvent } from '../common';

export interface AuthUser {
  createdAt: number;

  /**
   * When the User account has been "soft blocked", this property will contain
   * the date when the restriction was enacted, and the identifier for why.
   */
  softBlock: {
    blockedAt: number;
    reason: SoftBlockReason;
    blockedDueToOverageType?: SoftBlockedDueToOverageType;
  } | null;

  /**
   * An object containing billing infomation associated with the User account.
   */
  billing: {
    currency?: 'usd' | 'eur' | (string & {});
    cancelation?: number | null;
    period: {
      start: number;
      end: number;
    } | null;
    contract?: {
      start: number;
      end: number;
    } | null;
    plan: 'pro' | 'enterprise' | 'hobby';
    platform?: 'stripe' | 'stripeTestMode';
    orbCustomerId?: string;
    syncedAt?: number;
    programType?: 'startup' | 'agency';
    trial?: {
      start: number;
      end: number;
    } | null;
    email?: string | null;
    tax?: {
      type: string;
      id: string;
    } | null;
    language?: string | null;
    address?: {
      line1?: string;
      line2?: string;
      postalCode?: string;
      city?: string;
      country?: string;
      state?: string;
    } | null;
    name?: string | null;
    invoiceItems?: {
      /**
       * Will be used to create an invoice item. The price must be in cents: 2000 for $20.
       */
      concurrentBuilds?: {
        tier?: number;
        price: number;
        quantity: number;
        highestQuantity?: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };

      /**
       * Will be used to create an invoice item. The price must be in cents: 2000 for $20.
       */
      webAnalytics?: {
        tier?: number;
        price: number;
        quantity: number;
        highestQuantity?: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };

      /**
       * Will be used to create an invoice item. The price must be in cents: 2000 for $20.
       */
      pro?: {
        tier?: number;
        price: number;
        quantity: number;
        highestQuantity?: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };

      /**
       * Will be used to create an invoice item. The price must be in cents: 2000 for $20.
       */
      enterprise?: {
        tier?: number;
        price: number;
        quantity: number;
        highestQuantity?: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };

      /**
       * Will be used to create an invoice item. The price must be in cents: 2000 for $20.
       */
      analytics?: {
        tier?: number;
        price: number;
        quantity: number;
        highestQuantity?: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };

      /**
       * Will be used to create an invoice item. The price must be in cents: 2000 for $20.
       */
      monitoring?: {
        tier?: number;
        price: number;
        quantity: number;
        highestQuantity?: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };

      /**
       * Will be used to create an invoice item. The price must be in cents: 2000 for $20.
       */
      passwordProtection?: {
        tier?: number;
        price: number;
        quantity: number;
        highestQuantity?: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };

      /**
       * Will be used to create an invoice item. The price must be in cents: 2000 for $20.
       */
      previewDeploymentSuffix?: {
        tier?: number;
        price: number;
        quantity: number;
        highestQuantity?: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };

      /**
       * Will be used to create an invoice item. The price must be in cents: 2000 for $20.
       */
      saml?: {
        tier?: number;
        price: number;
        quantity: number;
        highestQuantity?: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };

      /**
       * Will be used to create an invoice item. The price must be in cents: 2000 for $20.
       */
      teamSeats?: {
        tier?: number;
        price: number;
        quantity: number;
        highestQuantity?: number;
        name?: string;
        hidden: boolean;
        createdAt?: number;
        disabledAt?: number | null;
        frequency?: {
          interval: 'month';
          intervalCount: 1 | 2 | 3 | 6 | 12;
        };
        maxQuantity?: number;
      };
      analyticsUsage?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      artifacts?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      bandwidth?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      dataCacheRead?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      dataCacheRevalidation?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      dataCacheWrite?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      edgeConfigRead?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      edgeConfigWrite?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      edgeFunctionExecutionUnits?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      edgeMiddlewareInvocations?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      monitoringMetric?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      postgresComputeTime?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      postgresDatabase?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      postgresDataStorage?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      postgresDataTransfer?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      postgresWrittenData?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      serverlessFunctionExecution?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      sourceImages?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      storageRedisTotalBandwidthInBytes?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      storageRedisTotalCommands?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      storageRedisTotalDailyAvgStorageInBytes?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      storageRedisTotalDatabases?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
      webAnalyticsEvent?: {
        tier?: number;
        price: number;
        batch: number;
        threshold: number;
        name?: string;
        hidden: boolean;
        disabledAt?: number | null;
        enabledAt?: number | null;
      };
    } | null;
    invoiceSettings?: {
      footer?: string;
    };
    subscriptions?:
      | {
          id: string;
          trial: {
            start: number;
            end: number;
          } | null;
          period: {
            start: number;
            end: number;
          };
          frequency: {
            interval: 'month' | 'day' | 'week' | 'year';
            intervalCount: number;
          };
          discount: {
            id: string;
            coupon: {
              id: string;
              name: string | null;
              amountOff: number | null;
              percentageOff: number | null;
              durationInMonths: number | null;
              duration: 'forever' | 'repeating' | 'once';
            };
          } | null;
          items: {
            id: string;
            priceId: string;
            productId: string;
            amount: number;
            quantity: number;
          }[];
        }[]
      | null;
    controls?: {
      analyticsSampleRateInPercent?: number | null;
      analyticsSpendLimitInDollars?: number | null;
    } | null;
    purchaseOrder?: string | null;
    status?: 'active' | 'trialing' | 'overdue' | 'expired' | 'canceled';
    pricingExperiment?: 'august-2022';
    orbMigrationScheduledAt?: number | null;
  } | null;

  /**
   * An object containing infomation related to the amount of platform resources may be allocated to the User account.
   */
  resourceConfig: {
    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    nodeType?: string;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account. */
    concurrentBuilds?: number;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    awsAccountType?: string;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    awsAccountIds?: string[];

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    cfZoneName?: string;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    edgeConfigs?: number;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    edgeConfigSize?: number;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    edgeFunctionMaxSizeBytes?: number;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    edgeFunctionExecutionTimeoutMs?: number;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    serverlessFunctionDefaultMaxExecutionTime?: number;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    kvDatabases?: number;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    postgresDatabases?: number;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    blobStores?: number;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    integrationStores?: number;

    /**
     * An object containing infomation related to the amount of platform resources may be allocated to the User account.
     */
    cronJobs?: number;
  };

  /**
   * Prefix that will be used in the URL of "Preview" deployments created by the User account.
   */
  stagingPrefix: string;

  /**
   * set of dashboard view preferences (cards or list) per scopeId
   */
  activeDashboardViews?: {
    scopeId: string;
    viewPreference?: 'cards' | 'list';
    favoritesViewPreference?: 'open' | 'closed';
    recentsViewPreference?: 'open' | 'closed';
  }[];
  importFlowGitNamespace?: (string | number) | null;
  importFlowGitNamespaceId?: (string | number) | null;
  importFlowGitProvider?: 'github' | 'gitlab' | 'bitbucket';
  preferredScopesAndGitNamespaces?: {
    scopeId: string;
    gitNamespaceId: (string | number) | null;
  }[];
  dismissedToasts?: {
    name: string;
    dismissals: {
      scopeId: string;
      createdAt: number;
    }[];
  }[];
  favoriteProjectsAndSpaces?: (
    | {
        projectId: string;
        scopeSlug: string;
        scopeId: string;
      }
    | {
        spaceId: string;
        scopeSlug: string;
        scopeId: string;
      }
  )[];
  hasTrialAvailable: boolean;
  remoteCaching?: {
    enabled?: boolean;
  };
  dataCache?: {
    excessBillingEnabled?: boolean;
  };
  featureBlocks?: {
    webAnalytics?: {
      blockedFrom?: number;
      blockedUntil?: number;
      isCurrentlyBlocked: boolean;
    };
  };
  id: string;
  email: string;
  name: string | null;
  username: string;
  avatar: string | null;
  defaultTeamId: string | null;
  version: 'northstar' | null;
}

export interface AuthUserLimited {
  limited: boolean;
  id: string;
  email: string;
  name: string | null;
  username: string;
  avatar: string | null;
  defaultTeamId: string | null;
  version: 'northstar' | null;
}

export type User = AuthUser | AuthUserLimited;

export interface DeleteUserProps {
  reasons: {
    /**
     * Description of the reason why the User account is being deleted.
     */
    description: string;

    /**
     * Idenitifier slug of the reason why the User account is being deleted.
     */
    slug: string;
  }[];
}

export interface ListUserEventsProps {
  /**
   * Maximum number of items which may be returned.
   * @example 20
   */
  limit?: number;

  /**
   * Timestamp to only include items created since then.
   * @example 2019-12-08T10:00:38.976Z
   */
  since?: string;

  /**
   * The Team identifier or slug to perform the request on behalf of.
   */
  teamId?: string;

  /**
   * Comma-delimited list of event "types" to filter the results by.
   * @example login,team-member-join,domain-buy
   */
  types?: string;

  /**
   * Timestamp to only include items created until then.
   * @example 2019-12-09T23:00:38.976Z
   */
  until?: string;

  /**
   * When retrieving events for a Team, the userId parameter
   * may be specified to filter events generated by a specific
   * member of the Team.
   * @example aeIInYVk59zbFF2SxfyxxmuO
   */
  userId?: string;
}

export interface ListUserEventsReturnType {
  /**
   * Array of events generated by the User.
   */
  events: UserEvent[];
}
