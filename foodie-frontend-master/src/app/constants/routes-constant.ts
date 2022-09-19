export abstract class RoutesConstant {
  // Params
  static readonly RECIPE_ID: string = 'id';

  // Route roots
  static readonly RECIPES_ROUTE: string = 'recipes';
  static readonly ADMIN_ROUTE: string = 'admin';

  static readonly SIGNUP_ROUTE: string = 'signup';
  static readonly LOGIN_ROUTE: string = 'login';

  static readonly ABOUT_US: string = 'about-us';

  // Routes
  static readonly RECIPES_LIST: string = RoutesConstant.RECIPES_ROUTE;
  static readonly RECIPES_DETAILS_BASE: string = RoutesConstant.RECIPES_ROUTE;
  static readonly RECIPES_DETAILS: string = RoutesConstant.RECIPES_ROUTE + '/:' + RoutesConstant.RECIPE_ID;
  // static readonly RECIPES_NEW: string = RoutesConstant.RECIPES_ROUTE + '/new';
  // static readonly RECIPES_EDIT_BASE: string = RoutesConstant.RECIPES_ROUTE + '/edit';
  // static readonly RECIPES_EDIT: string = RoutesConstant.RECIPES_EDIT_BASE + '/:' + RoutesConstant.RECIPE_ID;

  // Daily meal plan
  static readonly DAILY_MEAL_PLAN: string = 'meal-planning';
  static readonly USER_ID: string = 'userId';
  static readonly PLAN_ID: string = 'id';
  static readonly CHECK_USER: string = 'check-user/:id';
  static readonly USER_MEAL_PLANS: string = RoutesConstant.DAILY_MEAL_PLAN;
  static readonly USER_MEAL_PLAN: string = RoutesConstant.DAILY_MEAL_PLAN + '/:' + RoutesConstant.USER_ID + '/:' + RoutesConstant.PLAN_ID;

  // Admin routes
  static readonly ADMIN_RECIPES_BASE: string = RoutesConstant.ADMIN_ROUTE + '/recipes';
  static readonly ADMIN_RECIPES_LIST: string = RoutesConstant.ADMIN_RECIPES_BASE;
  static readonly ADMIN_RECIPES_NEW: string = RoutesConstant.ADMIN_RECIPES_BASE + '/new';
  static readonly ADMIN_RECIPES_EDIT: string = RoutesConstant.ADMIN_RECIPES_BASE + '/edit/:id';

  static readonly ADMIN_NUTRITION_ISSUES_BASE: string = RoutesConstant.ADMIN_ROUTE + '/nutrition-issues';
  static readonly ADMIN_NUTRITION_ISSUES_LIST: string = RoutesConstant.ADMIN_NUTRITION_ISSUES_BASE;
  static readonly ADMIN_NUTRITION_ISSUES_NEW: string = RoutesConstant.ADMIN_NUTRITION_ISSUES_BASE + '/new';
  static readonly ADMIN_NUTRITION_ISSUES_EDIT: string = RoutesConstant.ADMIN_NUTRITION_ISSUES_BASE + '/edit/:id';

  static readonly ADMIN_INGREDIENTS_BASE: string = RoutesConstant.ADMIN_ROUTE + '/ingredients';
  static readonly ADMIN_INGREDIENTS_LIST: string = RoutesConstant.ADMIN_INGREDIENTS_BASE;
  static readonly ADMIN_INGREDIENTS_NEW: string = RoutesConstant.ADMIN_INGREDIENTS_BASE + '/new';
  static readonly ADMIN_INGREDIENTS_EDIT: string = RoutesConstant.ADMIN_INGREDIENTS_BASE + '/edit/:id';

  // Profile
  static readonly PROFILE: string = 'profile/:id';

  // Shopping lists
  static readonly SHOPPING_LISTS: string = 'shopping-lists';
  static readonly SHOPPING_LIST: string = 'shopping-lists/:id';
}
