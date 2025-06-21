# 🎉 ScrollView vs FlatList

## FlatList 사용 시기:

- 성능이 중요할 때: FlatList는 화면에 보이는 항목만 렌더링하여 메모리를 절약하고 성능을 향상시킵니다.
- 긴 데이터 목록: 피드, 검색 결과, 메시지 목록과 같이 잠재적으로 큰 데이터 세트를 렌더링할 때.
- 콘텐츠 길이를 모를 때: 표시해야 할 항목 수를 미리 알 수 없을 때.
- 동일한 종류의 콘텐츠: 동일한 구조를 가진 많은 항목을 표시할 때.

## ScrollView 사용 시기:

- 모든 콘텐츠가 메모리에 적합할 때: 성능 문제를 일으키지 않는 작고 고정된 양의 콘텐츠를 표시할 때.
- 정적 콘텐츠: 양식, 프로필 페이지, 상세 보기와 같이 미리 정해진 제한된 콘텐츠가 있는 화면.
- 혼합 콘텐츠 유형: 목록 패턴을 따르지 않는 특정 레이아웃에서 다양한 UI 컴포넌트를 표시해야 할 때.
- 수평 캐러셀 형태: 제한된 항목이 있는 이미지 캐러셀과 같은 작은 수평 스크롤 컴포넌트.

# 🚀 Pressable vs TouchableOpacity

## Pressable 사용 시기:

- 더 많은 커스터마이징이 필요할 때: Pressable은 다양한 상태(누름, 호버, 포커스)에 대해 더 많은 커스터마이징 옵션을 제공합니다.
- 복잡한 상호작용 상태: 세밀한 제어로 여러 상호작용 상태를 처리해야 할 때.
- 미래 대비: Pressable은 더 새롭고 결국 Touchable 컴포넌트를 대체하도록 설계되었습니다.
- 플랫폼별 동작: 다른 플랫폼에서 동작을 커스터마이즈하고 싶을 때.
- 중첩된 press 핸들러: 중첩된 상호작용 요소를 처리해야 할 때.

## TouchableOpacity 사용 시기:

- 단순한 페이드 효과: 누를 때 단순한 투명도 변화만 필요할 때.
- 이전 버전과의 호환성: TouchableOpacity를 이미 사용하고 있는 오래된 코드베이스에서 작업할 때.
- 더 간단한 API: 구성할 옵션이 적은 더 간단한 API를 선호할 때.
- 특정 투명도 애니메이션: 누를 때 투명도 값을 정밀하게 제어해야 할 때.
- 레거시 지원: 기존 컴포넌트와의 일관성을 유지할 때.

# 📸 Expo Image vs React Native Image

## Expo Image 사용 시기:

- 성능: Expo Image는 더 나은 성능을 제공할 수 있는 네이티브 이미지 라이브러리를 사용합니다.
- 캐싱: 내장된 캐싱 시스템이 더 강력하고 구성 가능합니다.
- 현대적 이미지 기능: 콘텐츠 인식 리사이징, 블러해시 플레이스홀더, 점진적 로딩과 같은 고급 기능이 필요할 때.
- 전환: 이미지 로딩 상태 간 부드러운 전환이 필요할 때.
- 크로스 플랫폼 일관성: iOS와 Android에서 더 일관된 동작.
- 적응성: 화면 크기와 해상도에 따른 적응형 이미지 지원이 더 좋습니다.

## React Native Image 사용 시기:

- 단순성: 최소한의 구성으로 기본적인 이미지 표시가 필요할 때.
- 번들 크기: 앱의 번들 크기를 작게 유지하려고 할 때.
- Expo 의존성 없음: Expo를 사용하지 않거나 의존성을 최소화하고 싶을 때.
- 레거시 지원: React Native Image를 사용하는 기존 코드와의 호환성을 유지할 때.
- 기본 요구사항: 고급 이미지 기능이 필요하지 않은 경우.

# 👀 icon.png vs adaptive-icon.png

## 💥 icon.png

- 대부분의 기기에서 나타나는 표준 앱 아이콘입니다. 앱의 주요 아이콘입니다.
- 권장 이미지 크기: 1024x1024

## 💫 adaptive-icon.png

- Android 8.0(Oreo)에서 도입되었으며 Android 기기에 특화되어 있습니다.
- 권장 이미지 크기: 1024x1024

**이러한 아이콘을 제공하지 않아도 앱은 작동하지만 Expo의 기본 아이콘을 사용하게 됩니다. App Store나 Play Store에 출시할 계획이 있는 전문적인 앱의 경우 반드시 자체 커스텀 아이콘을 포함해야 합니다**

# 🎁 React Native Directory

- 다음 주소에서 수백 개의 다른 서드파티 라이브러리를 찾을 수 있습니다: https://reactnative.directory

# 🤌 React Native Gesture Handler

- 제스처는 앱에서 직관적인 사용자 경험을 제공하는 좋은 방법입니다.
- **React Native Gesture Handler** 라이브러리는 제스처를 처리할 수 있는 내장 네이티브 컴포넌트를 제공합니다.
- 플랫폼의 네이티브 터치 처리 시스템을 사용하여 팬, 탭, 회전 및 기타 제스처를 인식합니다.
- 자세히 알아보기: https://docs.swmansion.com/react-native-gesture-handler/docs/

# 🐴 React Native Reanimated

- 뛰어난 개발자 경험으로 부드러운 애니메이션을 만들 수 있습니다.
- 자세히 알아보기: https://docs.swmansion.com/react-native-reanimated/

# 빌드 및 출시

- Expo Application Services(EAS)로 프로덕션용 앱을 빌드할 수 있습니다.
- Google Play Store / App Store에 제출하려면 개발자 계정이 필요합니다.
- 앱이 승인되고 라이브되기까지 며칠/몇 주가 걸릴 수 있습니다.
- https://docs.expo.dev/deploy/build-project/
- https://docs.expo.dev/deploy/submit-to-app-stores/

## 단계

- expo.dev를 방문하여 가입하세요
- npm i -g eas-cli
- eas login
- eas init => 프로젝트 생성을 요청할 것입니다. 예를 선택하세요
- eas build --platform android => 안드로이드용 빌드 => APK 파일을 제공합니다
- eas build --platform ios => iOS용 빌드 => IPA 파일을 제공합니다
- 그 후 이 파일들을 플레이 스토어나 앱 스토어에 제출하면 됩니다
