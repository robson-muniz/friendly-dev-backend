// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    const publicRole = await strapi
      .query('plugin::users-permissions.role')
      .findOne({ where: { type: 'public' } });

    if (publicRole) {
      const permissions = [
        'api::post.post.find',
        'api::post.post.findOne',
        'api::project.project.find',
        'api::project.project.findOne',
      ];

      for (const action of permissions) {
        const permission = await strapi
          .query('plugin::users-permissions.permission')
          .findOne({
            where: {
              action,
              role: publicRole.id,
            },
          });

        if (!permission) {
          await strapi.query('plugin::users-permissions.permission').create({
            data: {
              action,
              role: publicRole.id,
            },
          });
        }
      }
    }
  },
};
