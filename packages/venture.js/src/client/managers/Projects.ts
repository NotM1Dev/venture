import type {
  CreateProjectReturnType,
  CreateProjectProps,
  DeleteProjectReturnType,
  DeleteProjectProps
} from '../../index';
import { BaseManager } from './Base';

import Routes from '../../routes';
import axios from 'axios';

export class ProjectsManager extends BaseManager {
  /**
   * Allows to create a new project with the provided configuration.
   * It only requires the project `name` but more configuration can
   * be provided to override the defaults.
   * @see https://vercel.com/docs/rest-api/endpoints#create-a-new-project
   */
  public async create(props: CreateProjectProps): Promise<CreateProjectReturnType> {
    const project = await axios.post(
      Routes.PROJECTS.CREATE(props),
      {
        ...props,
        teamId: undefined
      },
      {
        headers: {
          Authorization: this.client.token
        }
      }
    );

    return project.data;
  }

  /**
   * Delete a specific project by passing
   * either the project id or name.
   * @see https://vercel.com/docs/rest-api/endpoints#delete-a-project
   */
  public async delete(props: DeleteProjectProps): Promise<DeleteProjectReturnType> {
    const data = await axios.delete(Routes.PROJECTS.DELETE(props), {
      headers: {
        Authorization: this.client.token
      }
    });

    return data.data;
  }
}
