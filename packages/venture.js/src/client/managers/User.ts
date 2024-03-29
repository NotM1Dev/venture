import { BaseManager } from './Base';
import type {
    ListUserEventsReturnType,
    ListUserEventsProps,
    User
} from '../../types';

import Routes from '../../routes';
import axios from 'axios';

export class UserManager extends BaseManager {
    /**
     * Retrieves information related to the currently authenticated User.
     * @see https://vercel.com/docs/rest-api/endpoints#get-the-user
     */
    public async getCurrent(): Promise<User> {
        const user = await axios.get(Routes.USER.GET(), {
            headers: {
                Authorization: this.client.token
            }
        });

        return user.data.user;
    }

    /**
     * Initiates the deletion process for the currently authenticated User, by sending a deletion confirmation email.
     * The email contains a link that the user needs to visit in order to proceed with the deletion process.
     * @see https://vercel.com/docs/rest-api/endpoints#delete-user-account
     */
    public async delete(): Promise<void> {
        await axios.delete(Routes.USER.DELETE(), {
            headers: {
                Authorization: this.client.token
            }
        });
    }

    /**
     * Retrieves a list of "events" generated by the User on Vercel.
     * Events are generated when the User performs a particular action,
     * such as logging in, creating a deployment, and joining a Team (just to name a few).
     * When the `teamId` parameter is supplied, then the events that are returned will be
     * in relation to the Team that was specified.
     * @see https://vercel.com/docs/rest-api/endpoints#list-user-events
     */
    public async listEvents(
        props?: ListUserEventsProps
    ): Promise<ListUserEventsReturnType> {
        const events = await axios.get(Routes.USER.LIST_EVENTS(props), {
            headers: {
                Authorization: this.client.token
            }
        });

        return events.data;
    }
}
