export interface AssignAliasProps {
    /**
     * The ID of the deployment the aliases should be listed for
     * @example dpl_FjvFJncQHQcZMznrUm9EoB8sFuPa
     */
    id: string;

    /**
     * The Team identifier or slug to perform the request on behalf of.
     */
    teamId?: string;

    /**
     * The alias we want to assign to the deployment defined in the URL
     * @example my-alias.vercel.app
     */
    alias?: string;

    /**
     * The redirect property will take precedence over the deployment
     * id from the URL and consists of a hostname (like test.com) to
     * which the alias should redirect using status code 307
     */
    redirect?: string | null;
}

export interface AssignAliasReturnType {
    /**
     * The unique identifier of the alias
     */
    uid: string;

    /**
     * The assigned alias name
     */
    alias: string;

    /**
     * The date when the alias was created
     */
    created: string;

    /**
     * The unique identifier of the previously aliased deployment,
     * only received when the alias was used before
     */
    oldDeploymentId?: string | null;
}

export interface DeleteAliasProps {
    /**
     * The ID or alias that will be removed
     * @example 2WjyKQmM8ZnGcJsPWMrHRHrE
     */
    aliasId: string;

    /**
     * The Team identifier or slug to perform the request on behalf of.
     */
    teamId?: string;
}

export interface DeleteAliasReturnType {
    status: 'SUCCESS';
}

export interface GetAliasProps {
    /**
     * The alias or alias ID to be retrieved
     * @example example.vercel.app
     */
    idOrAlias: string;

    /**
     * Get the alias only if it was created after the provided timestamp
     * @example 1540095775951
     * @deprecated
     */
    from?: number;

    /**
     * Get the alias only if it is assigned to the provided project ID
     * @example prj_12HKQaOmR5t5Uy6vdcQsNIiZgHGB
     */
    projectId?: string;

    /**
     * Get the alias only if it was created after this JavaScript timestamp
     * @example 1540095775941
     */
    since?: number;

    /**
     * The Team identifier or slug to perform the request on behalf of.
     */
    teamId?: string;

    /**
     * Get the alias only if it was created before this JavaScript timestamp
     * @example 1540095775951
     */
    until?: number;
}

export interface GetAliasReturnType {
    /**
     * The alias name, it could be a `.vercel.app` subdomain or a custom domain
     */
    alias: string;

    /**
     * The date when the alias was created
     */
    created: string;

    /**
     * The date when the alias was created in milliseconds since the UNIX epoch
     */
    createdAt?: number;

    /**
     * Information of the user who created the alias
     */
    creator?: {
        /**
         * ID of the user who created the alias
         */
        uid: string;

        /**
         * Email of the user who created the alias
         */
        email: string;

        /**
         * Username of the user who created the alias
         */
        username: string;
    };

    /**
     * The date when the alias was deleted in milliseconds since the UNIX epoch
     */
    deletedAt?: number;

    /**
     * A map with the deployment ID, URL and metadata
     */
    deployment?: {
        /**
         * The deployment unique identifier
         */
        id: string;

        /**
         * The deployment unique URL
         */
        url: string;

        /**
         * The deployment metadata
         */
        meta?: string;
    };

    /**
     * The deployment ID
     */
    deploymentId: string | null;

    /**
     * The unique identifier of the project
     */
    projectId: string | null;

    /**
     * Target destination domain for redirect when the alias is a redirect
     */
    redirect?: string | null;

    /**
     * Status code to be used on redirect
     */
    redirectStatusCode?: (301 | 302 | 307 | 308) | null;

    /**
     * The unique identifier of the alias
     */
    uid: string;

    /**
     * The date when the alias was updated in milliseconds since the UNIX epoch
     */
    updatedAt?: number;

    /**
     * The protection bypass for the alias
     */
    protectionBypass?: {
        [key: string]:
            | {
                  createdAt: number;
                  createdBy: string;
                  scope: 'shareable-link';
              }
            | {
                  createdAt: number;
                  lastUpdatedAt: number;
                  lastUpdatedBy: string;
                  access: 'requested' | 'granted';
                  scope: 'user';
              }
            | {
                  createdAt: number;
                  createdBy: string;
                  scope: 'alias-protection-override';
              }
            | {
                  createdAt: number;
                  lastUpdatedAt: number;
                  lastUpdatedBy: string;
                  scope: 'email_invite';
              };
    };
}
